import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впрягаться: PerfectVerb = {
  name: Word('впрягаться', 5),
  singular1stPerson: Word('впрягаюсь', 5),
  singular2ndPerson: Word('впрягаешься', 5),
  singular3rdPerson: Word('впрягается', 5),
  plural1stPerson: Word('впрягаемся', 5),
  plural2ndPerson: Word('впрягаетесь', 5),
  plural3rdPerson: Word('впрягаются', 5),
  masculinePast: Word('впрягался', 5),
  femininePast: Word('впрягалась', 5),
  neuterPast: Word('впрягалось', 5),
  pluralPast: Word('впрягались', 5),
  imperativeInformal: Word('впрягайся', 5),
  imperativeFormal: Word('впрягайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(впрягаться.name.text, впрягаться);

export { впрягаться };