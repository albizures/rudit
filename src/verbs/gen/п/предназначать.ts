import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предназначать: PerfectVerb = {
  name: Word('предназначать', 10),
  singular1stPerson: Word('предназначаю', 10),
  singular2ndPerson: Word('предназначаешь', 10),
  singular3rdPerson: Word('предназначает', 10),
  plural1stPerson: Word('предназначаем', 10),
  plural2ndPerson: Word('предназначаете', 10),
  plural3rdPerson: Word('предназначают', 10),
  masculinePast: Word('предназначал', 10),
  femininePast: Word('предназначала', 10),
  neuterPast: Word('предназначало', 10),
  pluralPast: Word('предназначали', 10),
  imperativeInformal: Word('предназначай', 10),
  imperativeFormal: Word('предназначайте', 10),
  imperfect: ['предназначить'],
};

perfectVerbs.set(предназначать.name.text, предназначать);

export { предназначать };