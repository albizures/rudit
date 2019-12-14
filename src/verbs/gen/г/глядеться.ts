import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глядеться: PerfectVerb = {
  name: Word('глядеться', 4),
  singular1stPerson: Word('гляжусь', 4),
  singular2ndPerson: Word('глядишься', 4),
  singular3rdPerson: Word('глядится', 4),
  plural1stPerson: Word('глядимся', 4),
  plural2ndPerson: Word('глядитесь', 4),
  plural3rdPerson: Word('глядятся', 4),
  masculinePast: Word('гляделся', 4),
  femininePast: Word('гляделась', 4),
  neuterPast: Word('гляделось', 4),
  pluralPast: Word('гляделись', 4),
  imperativeInformal: Word('глядись', 4),
  imperativeFormal: Word('глядитесь', 4),
  imperfect: [],
};

perfectVerbs.set(глядеться.name.text, глядеться);

export { глядеться };