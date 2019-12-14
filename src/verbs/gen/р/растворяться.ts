import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растворяться: PerfectVerb = {
  name: Word('растворяться', 7),
  singular1stPerson: Word('растворяюсь', 7),
  singular2ndPerson: Word('растворяешься', 7),
  singular3rdPerson: Word('растворяется', 7),
  plural1stPerson: Word('растворяемся', 7),
  plural2ndPerson: Word('растворяетесь', 7),
  plural3rdPerson: Word('растворяются', 7),
  masculinePast: Word('растворялся', 7),
  femininePast: Word('растворялась', 7),
  neuterPast: Word('растворялось', 7),
  pluralPast: Word('растворялись', 7),
  imperativeInformal: Word('растворяйся', 7),
  imperativeFormal: Word('растворяйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(растворяться.name.text, растворяться);

export { растворяться };