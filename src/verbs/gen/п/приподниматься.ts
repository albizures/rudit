import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приподниматься: PerfectVerb = {
  name: Word('приподниматься', 9),
  singular1stPerson: Word('приподнимаюсь', 9),
  singular2ndPerson: Word('приподнимаешься', 9),
  singular3rdPerson: Word('приподнимается', 9),
  plural1stPerson: Word('приподнимаемся', 9),
  plural2ndPerson: Word('приподнимаетесь', 9),
  plural3rdPerson: Word('приподнимаются', 9),
  masculinePast: Word('приподнимался', 9),
  femininePast: Word('приподнималась', 9),
  neuterPast: Word('приподнималось', 9),
  pluralPast: Word('приподнимались', 9),
  imperativeInformal: Word('приподнимайся', 9),
  imperativeFormal: Word('приподнимайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(приподниматься.name.text, приподниматься);

export { приподниматься };