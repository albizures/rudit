import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усмехаться: PerfectVerb = {
  name: Word('усмехаться', 5),
  singular1stPerson: Word('усмехаюсь', 5),
  singular2ndPerson: Word('усмехаешься', 5),
  singular3rdPerson: Word('усмехается', 5),
  plural1stPerson: Word('усмехаемся', 5),
  plural2ndPerson: Word('усмехаетесь', 5),
  plural3rdPerson: Word('усмехаются', 5),
  masculinePast: Word('усмехался', 5),
  femininePast: Word('усмехалась', 5),
  neuterPast: Word('усмехалось', 5),
  pluralPast: Word('усмехались', 5),
  imperativeInformal: Word('усмехайся', 5),
  imperativeFormal: Word('усмехайтесь', 5),
  imperfect: ['усмехнуться'],
};

perfectVerbs.set(усмехаться.name.text, усмехаться);

export { усмехаться };