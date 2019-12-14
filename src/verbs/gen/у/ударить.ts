import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ударить: PerfectVerb = {
  name: Word('ударить', 2),
  singular1stPerson: Word('ударю', 2),
  singular2ndPerson: Word('ударишь', 2),
  singular3rdPerson: Word('ударит', 2),
  plural1stPerson: Word('ударим', 2),
  plural2ndPerson: Word('ударите', 2),
  plural3rdPerson: Word('ударят', 2),
  masculinePast: Word('ударил', 2),
  femininePast: Word('ударила', 2),
  neuterPast: Word('ударило', 2),
  pluralPast: Word('ударили', 2),
  imperativeInformal: Word('ударь', 2),
  imperativeFormal: Word('ударьте', 2),
  imperfect: ['ударять'],
};

perfectVerbs.set(ударить.name.text, ударить);

export { ударить };