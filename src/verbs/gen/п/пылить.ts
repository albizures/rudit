import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пылить: PerfectVerb = {
  name: Word('пылить', 3),
  singular1stPerson: Word('пылю', 3),
  singular2ndPerson: Word('пылишь', 3),
  singular3rdPerson: Word('пылит', 3),
  plural1stPerson: Word('пылим', 3),
  plural2ndPerson: Word('пылите', 3),
  plural3rdPerson: Word('пылят', 3),
  masculinePast: Word('пылил', 3),
  femininePast: Word('пылила', 3),
  neuterPast: Word('пылило', 3),
  pluralPast: Word('пылили', 3),
  imperativeInformal: Word('пыли', 3),
  imperativeFormal: Word('пылите', 3),
  imperfect: [],
};

perfectVerbs.set(пылить.name.text, пылить);

export { пылить };