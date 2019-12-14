import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сокращаться: PerfectVerb = {
  name: Word('сокращаться', 6),
  singular1stPerson: Word('сокращаюсь', 6),
  singular2ndPerson: Word('сокращаешься', 6),
  singular3rdPerson: Word('сокращается', 6),
  plural1stPerson: Word('сокращаемся', 6),
  plural2ndPerson: Word('сокращаетесь', 6),
  plural3rdPerson: Word('сокращаются', 6),
  masculinePast: Word('сокращался', 6),
  femininePast: Word('сокращалась', 6),
  neuterPast: Word('сокращалось', 6),
  pluralPast: Word('сокращались', 6),
  imperativeInformal: Word('сокращайся', 6),
  imperativeFormal: Word('сокращайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(сокращаться.name.text, сокращаться);

export { сокращаться };