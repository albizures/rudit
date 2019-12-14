import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестраивать: PerfectVerb = {
  name: Word('перестраивать', 7),
  singular1stPerson: Word('перестраиваю', 7),
  singular2ndPerson: Word('перестраиваешь', 7),
  singular3rdPerson: Word('перестраивает', 7),
  plural1stPerson: Word('перестраиваем', 7),
  plural2ndPerson: Word('перестраиваете', 7),
  plural3rdPerson: Word('перестраивают', 7),
  masculinePast: Word('перестраивал', 7),
  femininePast: Word('перестраивала', 7),
  neuterPast: Word('перестраивало', 7),
  pluralPast: Word('перестраивали', 7),
  imperativeInformal: Word('перестраивай', 7),
  imperativeFormal: Word('перестраивайте', 7),
  imperfect: ['перестроить'],
};

perfectVerbs.set(перестраивать.name.text, перестраивать);

export { перестраивать };