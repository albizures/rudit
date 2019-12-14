import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намылить: PerfectVerb = {
  name: Word('намылить', 3),
  singular1stPerson: Word('намылю', 3),
  singular2ndPerson: Word('намылишь', 3),
  singular3rdPerson: Word('намылит', 3),
  plural1stPerson: Word('намылим', 3),
  plural2ndPerson: Word('намылите', 3),
  plural3rdPerson: Word('намылят', 3),
  masculinePast: Word('намылил', 3),
  femininePast: Word('намылила', 3),
  neuterPast: Word('намылило', 3),
  pluralPast: Word('намылили', 3),
  imperativeInformal: Word('намыль', 3),
  imperativeFormal: Word('намыльте', 3),
  imperfect: [],
};

perfectVerbs.set(намылить.name.text, намылить);

export { намылить };