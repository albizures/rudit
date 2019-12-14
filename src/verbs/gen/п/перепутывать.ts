import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепутывать: PerfectVerb = {
  name: Word('перепутывать', 5),
  singular1stPerson: Word('перепутываю', 5),
  singular2ndPerson: Word('перепутываешь', 5),
  singular3rdPerson: Word('перепутывает', 5),
  plural1stPerson: Word('перепутываем', 5),
  plural2ndPerson: Word('перепутываете', 5),
  plural3rdPerson: Word('перепутывают', 5),
  masculinePast: Word('перепутывал', 5),
  femininePast: Word('перепутывала', 5),
  neuterPast: Word('перепутывало', 5),
  pluralPast: Word('перепутывали', 5),
  imperativeInformal: Word('перепутывай', 5),
  imperativeFormal: Word('перепутывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перепутывать.name.text, перепутывать);

export { перепутывать };