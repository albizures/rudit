import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понаглядеться: PerfectVerb = {
  name: Word('понаглядеться', 8),
  singular1stPerson: Word('понагляжусь', 8),
  singular2ndPerson: Word('понаглядишься', 8),
  singular3rdPerson: Word('понаглядится', 8),
  plural1stPerson: Word('понаглядимся', 8),
  plural2ndPerson: Word('понаглядитесь', 8),
  plural3rdPerson: Word('понаглядятся', 8),
  masculinePast: Word('понагляделся', 8),
  femininePast: Word('понагляделась', 8),
  neuterPast: Word('понагляделось', 8),
  pluralPast: Word('понагляделись', 8),
  imperativeInformal: Word('понаглядись', 8),
  imperativeFormal: Word('понаглядитесь', 8),
  imperfect: [],
};

perfectVerbs.set(понаглядеться.name.text, понаглядеться);

export { понаглядеться };