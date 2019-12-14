import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерабатывать: PerfectVerb = {
  name: Word('перерабатывать', 7),
  singular1stPerson: Word('перерабатываю', 7),
  singular2ndPerson: Word('перерабатываешь', 7),
  singular3rdPerson: Word('перерабатывает', 7),
  plural1stPerson: Word('перерабатываем', 7),
  plural2ndPerson: Word('перерабатываете', 7),
  plural3rdPerson: Word('перерабатывают', 7),
  masculinePast: Word('перерабатывал', 7),
  femininePast: Word('перерабатывала', 7),
  neuterPast: Word('перерабатывало', 7),
  pluralPast: Word('перерабатывали', 7),
  imperativeInformal: Word('перерабатывай', 7),
  imperativeFormal: Word('перерабатывайте', 7),
  imperfect: [],
};

perfectVerbs.set(перерабатывать.name.text, перерабатывать);

export { перерабатывать };