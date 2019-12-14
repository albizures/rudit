import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вживить: PerfectVerb = {
  name: Word('вживить', 4),
  singular1stPerson: Word('вживлю', 5),
  singular2ndPerson: Word('вживишь', 4),
  singular3rdPerson: Word('вживит', 4),
  plural1stPerson: Word('вживим', 4),
  plural2ndPerson: Word('вживите', 4),
  plural3rdPerson: Word('вживят', 4),
  masculinePast: Word('вживил', 4),
  femininePast: Word('вживила', 4),
  neuterPast: Word('вживило', 4),
  pluralPast: Word('вживили', 4),
  imperativeInformal: Word('вживи', 4),
  imperativeFormal: Word('вживите', 4),
  imperfect: [],
};

perfectVerbs.set(вживить.name.text, вживить);

export { вживить };