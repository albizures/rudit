import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const читаться: PerfectVerb = {
  name: Word('читаться', 3),
  singular1stPerson: Word('читаюсь', 3),
  singular2ndPerson: Word('читаешься', 3),
  singular3rdPerson: Word('читается', 3),
  plural1stPerson: Word('читаемся', 3),
  plural2ndPerson: Word('читаетесь', 3),
  plural3rdPerson: Word('читаются', 3),
  masculinePast: Word('читался', 3),
  femininePast: Word('читалась', 3),
  neuterPast: Word('читалось', 3),
  pluralPast: Word('читались', 3),
  imperativeInformal: Word('читайся', 3),
  imperativeFormal: Word('читайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(читаться.name.text, читаться);

export { читаться };