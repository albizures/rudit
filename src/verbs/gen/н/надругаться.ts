import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надругаться: PerfectVerb = {
  name: Word('надругаться', 6),
  singular1stPerson: Word('надругаюсь', 6),
  singular2ndPerson: Word('надругаешься', 6),
  singular3rdPerson: Word('надругается', 6),
  plural1stPerson: Word('надругаемся', 6),
  plural2ndPerson: Word('надругаетесь', 6),
  plural3rdPerson: Word('надругаются', 6),
  masculinePast: Word('надругался', 6),
  femininePast: Word('надругалась', 6),
  neuterPast: Word('надругалось', 6),
  pluralPast: Word('надругались', 6),
  imperativeInformal: Word('надругайся', 6),
  imperativeFormal: Word('надругайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(надругаться.name.text, надругаться);

export { надругаться };