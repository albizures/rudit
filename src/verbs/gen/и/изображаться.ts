import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изображаться: PerfectVerb = {
  name: Word('изображаться', 7),
  singular1stPerson: Word('изображаюсь', 7),
  singular2ndPerson: Word('изображаешься', 7),
  singular3rdPerson: Word('изображается', 7),
  plural1stPerson: Word('изображаемся', 7),
  plural2ndPerson: Word('изображаетесь', 7),
  plural3rdPerson: Word('изображаются', 7),
  masculinePast: Word('изображался', 7),
  femininePast: Word('изображалась', 7),
  neuterPast: Word('изображалось', 7),
  pluralPast: Word('изображались', 7),
  imperativeInformal: Word('изображайся', 7),
  imperativeFormal: Word('изображайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(изображаться.name.text, изображаться);

export { изображаться };