import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расползаться: PerfectVerb = {
  name: Word('расползаться', 7),
  singular1stPerson: Word('расползаюсь', 7),
  singular2ndPerson: Word('расползаешься', 7),
  singular3rdPerson: Word('расползается', 7),
  plural1stPerson: Word('расползаемся', 7),
  plural2ndPerson: Word('расползаетесь', 7),
  plural3rdPerson: Word('расползаются', 7),
  masculinePast: Word('расползался', 7),
  femininePast: Word('расползалась', 7),
  neuterPast: Word('расползалось', 7),
  pluralPast: Word('расползались', 7),
  imperativeInformal: Word('расползайся', 7),
  imperativeFormal: Word('расползайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расползаться.name.text, расползаться);

export { расползаться };