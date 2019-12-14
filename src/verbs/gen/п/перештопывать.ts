import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перештопывать: PerfectVerb = {
  name: Word('перештопывать', 6),
  singular1stPerson: Word('перештопываю', 6),
  singular2ndPerson: Word('перештопываешь', 6),
  singular3rdPerson: Word('перештопывает', 6),
  plural1stPerson: Word('перештопываем', 6),
  plural2ndPerson: Word('перештопываете', 6),
  plural3rdPerson: Word('перештопывают', 6),
  masculinePast: Word('перештопывал', 6),
  femininePast: Word('перештопывала', 6),
  neuterPast: Word('перештопывало', 6),
  pluralPast: Word('перештопывали', 6),
  imperativeInformal: Word('перештопывай', 6),
  imperativeFormal: Word('перештопывайте', 6),
  imperfect: [],
};

perfectVerbs.set(перештопывать.name.text, перештопывать);

export { перештопывать };