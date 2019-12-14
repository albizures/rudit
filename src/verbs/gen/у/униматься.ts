import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const униматься: PerfectVerb = {
  name: Word('униматься', 4),
  singular1stPerson: Word('унимаюсь', 4),
  singular2ndPerson: Word('унимаешься', 4),
  singular3rdPerson: Word('унимается', 4),
  plural1stPerson: Word('унимаемся', 4),
  plural2ndPerson: Word('унимаетесь', 4),
  plural3rdPerson: Word('унимаются', 4),
  masculinePast: Word('унимался', 4),
  femininePast: Word('унималась', 4),
  neuterPast: Word('унималось', 4),
  pluralPast: Word('унимались', 4),
  imperativeInformal: Word('унимайся', 4),
  imperativeFormal: Word('унимайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(униматься.name.text, униматься);

export { униматься };