import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надвигаться: PerfectVerb = {
  name: Word('надвигаться', 6),
  singular1stPerson: Word('надвигаюсь', 6),
  singular2ndPerson: Word('надвигаешься', 6),
  singular3rdPerson: Word('надвигается', 6),
  plural1stPerson: Word('надвигаемся', 6),
  plural2ndPerson: Word('надвигаетесь', 6),
  plural3rdPerson: Word('надвигаются', 6),
  masculinePast: Word('надвигался', 6),
  femininePast: Word('надвигалась', 6),
  neuterPast: Word('надвигалось', 6),
  pluralPast: Word('надвигались', 6),
  imperativeInformal: Word('надвигайся', 6),
  imperativeFormal: Word('надвигайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(надвигаться.name.text, надвигаться);

export { надвигаться };