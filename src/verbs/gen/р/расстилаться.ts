import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстилаться: PerfectVerb = {
  name: Word('расстилаться', 7),
  singular1stPerson: Word('расстилаюсь', 7),
  singular2ndPerson: Word('расстилаешься', 7),
  singular3rdPerson: Word('расстилается', 7),
  plural1stPerson: Word('расстилаемся', 7),
  plural2ndPerson: Word('расстилаетесь', 7),
  plural3rdPerson: Word('расстилаются', 7),
  masculinePast: Word('расстилался', 7),
  femininePast: Word('расстилалась', 7),
  neuterPast: Word('расстилалось', 7),
  pluralPast: Word('расстилались', 7),
  imperativeInformal: Word('расстилайся', 7),
  imperativeFormal: Word('расстилайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расстилаться.name.text, расстилаться);

export { расстилаться };