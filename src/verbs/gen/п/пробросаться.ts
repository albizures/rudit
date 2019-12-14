import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробросаться: PerfectVerb = {
  name: Word('пробросаться', 7),
  singular1stPerson: Word('пробросаюсь', 7),
  singular2ndPerson: Word('пробросаешься', 7),
  singular3rdPerson: Word('пробросается', 7),
  plural1stPerson: Word('пробросаемся', 7),
  plural2ndPerson: Word('пробросаетесь', 7),
  plural3rdPerson: Word('пробросаются', 7),
  masculinePast: Word('пробросался', 7),
  femininePast: Word('пробросалась', 7),
  neuterPast: Word('пробросалось', 7),
  pluralPast: Word('пробросались', 7),
  imperativeInformal: Word('пробросайся', 7),
  imperativeFormal: Word('пробросайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(пробросаться.name.text, пробросаться);

export { пробросаться };