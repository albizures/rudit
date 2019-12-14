import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протоптать: PerfectVerb = {
  name: Word('протоптать', 7),
  singular1stPerson: Word('протопчу', 7),
  singular2ndPerson: Word('протопчешь', 4),
  singular3rdPerson: Word('протопчет', 4),
  plural1stPerson: Word('протопчем', 4),
  plural2ndPerson: Word('протопчете', 4),
  plural3rdPerson: Word('протопчут', 4),
  masculinePast: Word('протоптал', 7),
  femininePast: Word('протоптала', 7),
  neuterPast: Word('протоптало', 7),
  pluralPast: Word('протоптали', 7),
  imperativeInformal: Word('протопчи', 7),
  imperativeFormal: Word('протопчите', 7),
  imperfect: [],
};

perfectVerbs.set(протоптать.name.text, протоптать);

export { протоптать };