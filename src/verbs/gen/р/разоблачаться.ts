import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разоблачаться: PerfectVerb = {
  name: Word('разоблачаться', 8),
  singular1stPerson: Word('разоблачаюсь', 8),
  singular2ndPerson: Word('разоблачаешься', 8),
  singular3rdPerson: Word('разоблачается', 8),
  plural1stPerson: Word('разоблачаемся', 8),
  plural2ndPerson: Word('разоблачаетесь', 8),
  plural3rdPerson: Word('разоблачаются', 8),
  masculinePast: Word('разоблачался', 8),
  femininePast: Word('разоблачалась', 8),
  neuterPast: Word('разоблачалось', 8),
  pluralPast: Word('разоблачались', 8),
  imperativeInformal: Word('разоблачайся', 8),
  imperativeFormal: Word('разоблачайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(разоблачаться.name.text, разоблачаться);

export { разоблачаться };