import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепечатывать: PerfectVerb = {
  name: Word('перепечатывать', 7),
  singular1stPerson: Word('перепечатываю', 7),
  singular2ndPerson: Word('перепечатываешь', 7),
  singular3rdPerson: Word('перепечатывает', 7),
  plural1stPerson: Word('перепечатываем', 7),
  plural2ndPerson: Word('перепечатываете', 7),
  plural3rdPerson: Word('перепечатывают', 7),
  masculinePast: Word('перепечатывал', 7),
  femininePast: Word('перепечатывала', 7),
  neuterPast: Word('перепечатывало', 7),
  pluralPast: Word('перепечатывали', 7),
  imperativeInformal: Word('перепечатывай', 7),
  imperativeFormal: Word('перепечатывайте', 7),
  imperfect: [],
};

perfectVerbs.set(перепечатывать.name.text, перепечатывать);

export { перепечатывать };