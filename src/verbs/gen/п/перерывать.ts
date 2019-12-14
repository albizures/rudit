import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерывать: PerfectVerb = {
  name: Word('перерывать', 7),
  singular1stPerson: Word('перерываю', 7),
  singular2ndPerson: Word('перерываешь', 7),
  singular3rdPerson: Word('перерывает', 7),
  plural1stPerson: Word('перерываем', 7),
  plural2ndPerson: Word('перерываете', 7),
  plural3rdPerson: Word('перерывают', 7),
  masculinePast: Word('перерывал', 7),
  femininePast: Word('перерывала', 7),
  neuterPast: Word('перерывало', 7),
  pluralPast: Word('перерывали', 7),
  imperativeInformal: Word('перерывай', 7),
  imperativeFormal: Word('перерывайте', 7),
  imperfect: [],
};

perfectVerbs.set(перерывать.name.text, перерывать);

export { перерывать };