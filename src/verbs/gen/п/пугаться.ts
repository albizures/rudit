import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пугаться: PerfectVerb = {
  name: Word('пугаться', 3),
  singular1stPerson: Word('пугаюсь', 3),
  singular2ndPerson: Word('пугаешься', 3),
  singular3rdPerson: Word('пугается', 3),
  plural1stPerson: Word('пугаемся', 3),
  plural2ndPerson: Word('пугаетесь', 3),
  plural3rdPerson: Word('пугаются', 3),
  masculinePast: Word('пугался', 3),
  femininePast: Word('пугалась', 3),
  neuterPast: Word('пугалось', 3),
  pluralPast: Word('пугались', 3),
  imperativeInformal: Word('пугайся', 3),
  imperativeFormal: Word('пугайтесь', 3),
  imperfect: ['испугаться'],
};

perfectVerbs.set(пугаться.name.text, пугаться);

export { пугаться };