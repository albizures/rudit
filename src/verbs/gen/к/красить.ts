import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const красить: PerfectVerb = {
  name: Word('красить', 2),
  singular1stPerson: Word('крашу', 2),
  singular2ndPerson: Word('красишь', 2),
  singular3rdPerson: Word('красит', 2),
  plural1stPerson: Word('красим', 2),
  plural2ndPerson: Word('красите', 2),
  plural3rdPerson: Word('красят', 2),
  masculinePast: Word('красил', 2),
  femininePast: Word('красила', 2),
  neuterPast: Word('красило', 2),
  pluralPast: Word('красили', 2),
  imperativeInformal: Word('крась', 2),
  imperativeFormal: Word('красьте', 2),
  imperfect: ['выкрасить','покрасить'],
};

perfectVerbs.set(красить.name.text, красить);

export { красить };