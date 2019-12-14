import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заливаться: PerfectVerb = {
  name: Word('заливаться', 5),
  singular1stPerson: Word('заливаюсь', 5),
  singular2ndPerson: Word('заливаешься', 5),
  singular3rdPerson: Word('заливается', 5),
  plural1stPerson: Word('заливаемся', 5),
  plural2ndPerson: Word('заливаетесь', 5),
  plural3rdPerson: Word('заливаются', 5),
  masculinePast: Word('заливался', 5),
  femininePast: Word('заливалась', 5),
  neuterPast: Word('заливалось', 5),
  pluralPast: Word('заливались', 5),
  imperativeInformal: Word('заливайся', 5),
  imperativeFormal: Word('заливайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заливаться.name.text, заливаться);

export { заливаться };