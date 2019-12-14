import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продвигаться: PerfectVerb = {
  name: Word('продвигаться', 7),
  singular1stPerson: Word('продвигаюсь', 7),
  singular2ndPerson: Word('продвигаешься', 7),
  singular3rdPerson: Word('продвигается', 7),
  plural1stPerson: Word('продвигаемся', 7),
  plural2ndPerson: Word('продвигаетесь', 7),
  plural3rdPerson: Word('продвигаются', 7),
  masculinePast: Word('продвигался', 7),
  femininePast: Word('продвигалась', 7),
  neuterPast: Word('продвигалось', 7),
  pluralPast: Word('продвигались', 7),
  imperativeInformal: Word('продвигайся', 7),
  imperativeFormal: Word('продвигайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(продвигаться.name.text, продвигаться);

export { продвигаться };