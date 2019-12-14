import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const славить: PerfectVerb = {
  name: Word('славить', 2),
  singular1stPerson: Word('славлю', 2),
  singular2ndPerson: Word('славишь', 2),
  singular3rdPerson: Word('славит', 2),
  plural1stPerson: Word('славим', 2),
  plural2ndPerson: Word('славите', 2),
  plural3rdPerson: Word('славят', 2),
  masculinePast: Word('славил', 2),
  femininePast: Word('славила', 2),
  neuterPast: Word('славило', 2),
  pluralPast: Word('славили', 2),
  imperativeInformal: Word('славь', 2),
  imperativeFormal: Word('славьте', 2),
  imperfect: ['прославить'],
};

perfectVerbs.set(славить.name.text, славить);

export { славить };