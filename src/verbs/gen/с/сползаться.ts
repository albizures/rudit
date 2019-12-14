import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сползаться: PerfectVerb = {
  name: Word('сползаться', 5),
  singular1stPerson: Word('сползаюсь', 5),
  singular2ndPerson: Word('сползаешься', 5),
  singular3rdPerson: Word('сползается', 5),
  plural1stPerson: Word('сползаемся', 5),
  plural2ndPerson: Word('сползаетесь', 5),
  plural3rdPerson: Word('сползаются', 5),
  masculinePast: Word('сползался', 5),
  femininePast: Word('сползалась', 5),
  neuterPast: Word('сползалось', 5),
  pluralPast: Word('сползались', 5),
  imperativeInformal: Word('сползайся', 5),
  imperativeFormal: Word('сползайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(сползаться.name.text, сползаться);

export { сползаться };