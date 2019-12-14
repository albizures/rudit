import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгружаться: PerfectVerb = {
  name: Word('выгружаться', 6),
  singular1stPerson: Word('выгружаюсь', 6),
  singular2ndPerson: Word('выгружаешься', 6),
  singular3rdPerson: Word('выгружается', 6),
  plural1stPerson: Word('выгружаемся', 6),
  plural2ndPerson: Word('выгружаетесь', 6),
  plural3rdPerson: Word('выгружаются', 6),
  masculinePast: Word('выгружался', 6),
  femininePast: Word('выгружалась', 6),
  neuterPast: Word('выгружалось', 6),
  pluralPast: Word('выгружались', 6),
  imperativeInformal: Word('выгружайся', 6),
  imperativeFormal: Word('выгружайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(выгружаться.name.text, выгружаться);

export { выгружаться };