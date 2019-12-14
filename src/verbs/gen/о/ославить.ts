import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ославить: PerfectVerb = {
  name: Word('ославить', 3),
  singular1stPerson: Word('ославлю', 3),
  singular2ndPerson: Word('ославишь', 3),
  singular3rdPerson: Word('ославит', 3),
  plural1stPerson: Word('ославим', 3),
  plural2ndPerson: Word('ославите', 3),
  plural3rdPerson: Word('ославят', 3),
  masculinePast: Word('ославил', 3),
  femininePast: Word('ославила', 3),
  neuterPast: Word('ославило', 3),
  pluralPast: Word('ославили', 3),
  imperativeInformal: Word('ославь', 3),
  imperativeFormal: Word('ославьте', 3),
  imperfect: [],
};

perfectVerbs.set(ославить.name.text, ославить);

export { ославить };