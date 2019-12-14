import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ограничить: PerfectVerb = {
  name: Word('ограничить', 5),
  singular1stPerson: Word('ограничу', 5),
  singular2ndPerson: Word('ограничишь', 5),
  singular3rdPerson: Word('ограничит', 5),
  plural1stPerson: Word('ограничим', 5),
  plural2ndPerson: Word('ограничите', 5),
  plural3rdPerson: Word('ограничат', 5),
  masculinePast: Word('ограничил', 5),
  femininePast: Word('ограничила', 5),
  neuterPast: Word('ограничило', 5),
  pluralPast: Word('ограничили', 5),
  imperativeInformal: Word('ограничь', 5),
  imperativeFormal: Word('ограничьте', 5),
  imperfect: ['ограничивать'],
};

perfectVerbs.set(ограничить.name.text, ограничить);

export { ограничить };