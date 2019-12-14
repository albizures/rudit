import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерешать: PerfectVerb = {
  name: Word('перерешать', 7),
  singular1stPerson: Word('перерешаю', 7),
  singular2ndPerson: Word('перерешаешь', 7),
  singular3rdPerson: Word('перерешает', 7),
  plural1stPerson: Word('перерешаем', 7),
  plural2ndPerson: Word('перерешаете', 7),
  plural3rdPerson: Word('перерешают', 7),
  masculinePast: Word('перерешал', 7),
  femininePast: Word('перерешала', 7),
  neuterPast: Word('перерешало', 7),
  pluralPast: Word('перерешали', 7),
  imperativeInformal: Word('перерешай', 7),
  imperativeFormal: Word('перерешайте', 7),
  imperfect: [],
};

perfectVerbs.set(перерешать.name.text, перерешать);

export { перерешать };