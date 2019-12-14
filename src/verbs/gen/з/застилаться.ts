import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застилаться: PerfectVerb = {
  name: Word('застилаться', 6),
  singular1stPerson: Word('застилаюсь', 6),
  singular2ndPerson: Word('застилаешься', 6),
  singular3rdPerson: Word('застилается', 6),
  plural1stPerson: Word('застилаемся', 6),
  plural2ndPerson: Word('застилаетесь', 6),
  plural3rdPerson: Word('застилаются', 6),
  masculinePast: Word('застилался', 6),
  femininePast: Word('застилалась', 6),
  neuterPast: Word('застилалось', 6),
  pluralPast: Word('застилались', 6),
  imperativeInformal: Word('застилайся', 6),
  imperativeFormal: Word('застилайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(застилаться.name.text, застилаться);

export { застилаться };