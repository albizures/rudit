import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обманывать: PerfectVerb = {
  name: Word('обманывать', 3),
  singular1stPerson: Word('обманываю', 3),
  singular2ndPerson: Word('обманываешь', 3),
  singular3rdPerson: Word('обманывает', 3),
  plural1stPerson: Word('обманываем', 3),
  plural2ndPerson: Word('обманываете', 3),
  plural3rdPerson: Word('обманывают', 3),
  masculinePast: Word('обманывал', 3),
  femininePast: Word('обманывала', 3),
  neuterPast: Word('обманывало', 3),
  pluralPast: Word('обманывали', 3),
  imperativeInformal: Word('обманывай', 3),
  imperativeFormal: Word('обманывайте', 3),
  imperfect: ['обмануть'],
};

perfectVerbs.set(обманывать.name.text, обманывать);

export { обманывать };