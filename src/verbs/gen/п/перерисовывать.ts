import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерисовывать: PerfectVerb = {
  name: Word('перерисовывать', 7),
  singular1stPerson: Word('перерисовываю', 7),
  singular2ndPerson: Word('перерисовываешь', 7),
  singular3rdPerson: Word('перерисовывает', 7),
  plural1stPerson: Word('перерисовываем', 7),
  plural2ndPerson: Word('перерисовываете', 7),
  plural3rdPerson: Word('перерисовывают', 7),
  masculinePast: Word('перерисовывал', 7),
  femininePast: Word('перерисовывала', 7),
  neuterPast: Word('перерисовывало', 7),
  pluralPast: Word('перерисовывали', 7),
  imperativeInformal: Word('перерисовывай', 7),
  imperativeFormal: Word('перерисовывайте', 7),
  imperfect: [],
};

perfectVerbs.set(перерисовывать.name.text, перерисовывать);

export { перерисовывать };