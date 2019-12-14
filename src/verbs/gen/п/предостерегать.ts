import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предостерегать: PerfectVerb = {
  name: Word('предостерегать', 11),
  singular1stPerson: Word('предостерегаю', 11),
  singular2ndPerson: Word('предостерегаешь', 11),
  singular3rdPerson: Word('предостерегает', 11),
  plural1stPerson: Word('предостерегаем', 11),
  plural2ndPerson: Word('предостерегаете', 11),
  plural3rdPerson: Word('предостерегают', 11),
  masculinePast: Word('предостерегал', 11),
  femininePast: Word('предостерегала', 11),
  neuterPast: Word('предостерегало', 11),
  pluralPast: Word('предостерегали', 11),
  imperativeInformal: Word('предостерегай', 11),
  imperativeFormal: Word('предостерегайте', 11),
  imperfect: ['предостеречь'],
};

perfectVerbs.set(предостерегать.name.text, предостерегать);

export { предостерегать };