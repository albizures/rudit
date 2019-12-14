import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испугаться: PerfectVerb = {
  name: Word('испугаться', 5),
  singular1stPerson: Word('испугаюсь', 5),
  singular2ndPerson: Word('испугаешься', 5),
  singular3rdPerson: Word('испугается', 5),
  plural1stPerson: Word('испугаемся', 5),
  plural2ndPerson: Word('испугаетесь', 5),
  plural3rdPerson: Word('испугаются', 5),
  masculinePast: Word('испугался', 5),
  femininePast: Word('испугалась', 5),
  neuterPast: Word('испугалось', 5),
  pluralPast: Word('испугались', 5),
  imperativeInformal: Word('испугайся', 5),
  imperativeFormal: Word('испугайтесь', 5),
  imperfect: ['пугаться'],
};

perfectVerbs.set(испугаться.name.text, испугаться);

export { испугаться };