import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передвигаться: PerfectVerb = {
  name: Word('передвигаться', 8),
  singular1stPerson: Word('передвигаюсь', 8),
  singular2ndPerson: Word('передвигаешься', 8),
  singular3rdPerson: Word('передвигается', 8),
  plural1stPerson: Word('передвигаемся', 8),
  plural2ndPerson: Word('передвигаетесь', 8),
  plural3rdPerson: Word('передвигаются', 8),
  masculinePast: Word('передвигался', 8),
  femininePast: Word('передвигалась', 8),
  neuterPast: Word('передвигалось', 8),
  pluralPast: Word('передвигались', 8),
  imperativeInformal: Word('передвигайся', 8),
  imperativeFormal: Word('передвигайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(передвигаться.name.text, передвигаться);

export { передвигаться };