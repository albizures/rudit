import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омрачаться: PerfectVerb = {
  name: Word('омрачаться', 5),
  singular1stPerson: Word('омрачаюсь', 5),
  singular2ndPerson: Word('омрачаешься', 5),
  singular3rdPerson: Word('омрачается', 5),
  plural1stPerson: Word('омрачаемся', 5),
  plural2ndPerson: Word('омрачаетесь', 5),
  plural3rdPerson: Word('омрачаются', 5),
  masculinePast: Word('омрачался', 5),
  femininePast: Word('омрачалась', 5),
  neuterPast: Word('омрачалось', 5),
  pluralPast: Word('омрачались', 5),
  imperativeInformal: Word('омрачайся', 5),
  imperativeFormal: Word('омрачайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(омрачаться.name.text, омрачаться);

export { омрачаться };