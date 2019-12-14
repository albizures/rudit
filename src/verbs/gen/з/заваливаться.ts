import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заваливаться: PerfectVerb = {
  name: Word('заваливаться', 3),
  singular1stPerson: Word('заваливаюсь', 3),
  singular2ndPerson: Word('заваливаешься', 3),
  singular3rdPerson: Word('заваливается', 3),
  plural1stPerson: Word('заваливаемся', 3),
  plural2ndPerson: Word('заваливаетесь', 3),
  plural3rdPerson: Word('заваливаются', 3),
  masculinePast: Word('заваливался', 3),
  femininePast: Word('заваливалась', 3),
  neuterPast: Word('заваливалось', 3),
  pluralPast: Word('заваливались', 3),
  imperativeInformal: Word('заваливайся', 3),
  imperativeFormal: Word('заваливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(заваливаться.name.text, заваливаться);

export { заваливаться };