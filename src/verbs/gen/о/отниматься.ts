import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отниматься: PerfectVerb = {
  name: Word('отниматься', 5),
  singular1stPerson: Word('отнимаюсь', 5),
  singular2ndPerson: Word('отнимаешься', 5),
  singular3rdPerson: Word('отнимается', 5),
  plural1stPerson: Word('отнимаемся', 5),
  plural2ndPerson: Word('отнимаетесь', 5),
  plural3rdPerson: Word('отнимаются', 5),
  masculinePast: Word('отнимался', 5),
  femininePast: Word('отнималась', 5),
  neuterPast: Word('отнималось', 5),
  pluralPast: Word('отнимались', 5),
  imperativeInformal: Word('отнимайся', 5),
  imperativeFormal: Word('отнимайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отниматься.name.text, отниматься);

export { отниматься };