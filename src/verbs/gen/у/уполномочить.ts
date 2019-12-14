import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уполномочить: PerfectVerb = {
  name: Word('уполномочить', 7),
  singular1stPerson: Word('уполномочу', 7),
  singular2ndPerson: Word('уполномочишь', 7),
  singular3rdPerson: Word('уполномочит', 7),
  plural1stPerson: Word('уполномочим', 7),
  plural2ndPerson: Word('уполномочите', 7),
  plural3rdPerson: Word('уполномочат', 7),
  masculinePast: Word('уполномочил', 7),
  femininePast: Word('уполномочила', 7),
  neuterPast: Word('уполномочило', 7),
  pluralPast: Word('уполномочили', 7),
  imperativeInformal: Word('уполномочь', 7),
  imperativeFormal: Word('уполномочьте', 7),
  imperfect: ['уполномочивать'],
};

perfectVerbs.set(уполномочить.name.text, уполномочить);

export { уполномочить };