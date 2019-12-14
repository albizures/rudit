import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повздыхать: PerfectVerb = {
  name: Word('повздыхать', 7),
  singular1stPerson: Word('повздыхаю', 7),
  singular2ndPerson: Word('повздыхаешь', 7),
  singular3rdPerson: Word('повздыхает', 7),
  plural1stPerson: Word('повздыхаем', 7),
  plural2ndPerson: Word('повздыхаете', 7),
  plural3rdPerson: Word('повздыхают', 7),
  masculinePast: Word('повздыхал', 7),
  femininePast: Word('повздыхала', 7),
  neuterPast: Word('повздыхало', 7),
  pluralPast: Word('повздыхали', 7),
  imperativeInformal: Word('повздыхай', 7),
  imperativeFormal: Word('повздыхайте', 7),
  imperfect: [],
};

perfectVerbs.set(повздыхать.name.text, повздыхать);

export { повздыхать };