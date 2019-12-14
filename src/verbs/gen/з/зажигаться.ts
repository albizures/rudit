import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажигаться: PerfectVerb = {
  name: Word('зажигаться', 5),
  singular1stPerson: Word('зажигаюсь', 5),
  singular2ndPerson: Word('зажигаешься', 5),
  singular3rdPerson: Word('зажигается', 5),
  plural1stPerson: Word('зажигаемся', 5),
  plural2ndPerson: Word('зажигаетесь', 5),
  plural3rdPerson: Word('зажигаются', 5),
  masculinePast: Word('зажигался', 5),
  femininePast: Word('зажигалась', 5),
  neuterPast: Word('зажигалось', 5),
  pluralPast: Word('зажигались', 5),
  imperativeInformal: Word('зажигайся', 5),
  imperativeFormal: Word('зажигайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зажигаться.name.text, зажигаться);

export { зажигаться };