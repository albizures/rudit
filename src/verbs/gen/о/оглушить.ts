import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглушить: PerfectVerb = {
  name: Word('оглушить', 5),
  singular1stPerson: Word('оглушу', 5),
  singular2ndPerson: Word('оглушишь', 5),
  singular3rdPerson: Word('оглушит', 5),
  plural1stPerson: Word('оглушим', 5),
  plural2ndPerson: Word('оглушите', 5),
  plural3rdPerson: Word('оглушат', 5),
  masculinePast: Word('оглушил', 5),
  femininePast: Word('оглушила', 5),
  neuterPast: Word('оглушило', 5),
  pluralPast: Word('оглушили', 5),
  imperativeInformal: Word('оглуши', 5),
  imperativeFormal: Word('оглушите', 5),
  imperfect: ['оглушать','глушить'],
};

perfectVerbs.set(оглушить.name.text, оглушить);

export { оглушить };