import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освежаться: PerfectVerb = {
  name: Word('освежаться', 5),
  singular1stPerson: Word('освежаюсь', 5),
  singular2ndPerson: Word('освежаешься', 5),
  singular3rdPerson: Word('освежается', 5),
  plural1stPerson: Word('освежаемся', 5),
  plural2ndPerson: Word('освежаетесь', 5),
  plural3rdPerson: Word('освежаются', 5),
  masculinePast: Word('освежался', 5),
  femininePast: Word('освежалась', 5),
  neuterPast: Word('освежалось', 5),
  pluralPast: Word('освежались', 5),
  imperativeInformal: Word('освежайся', 5),
  imperativeFormal: Word('освежайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(освежаться.name.text, освежаться);

export { освежаться };