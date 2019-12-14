import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заговорить: PerfectVerb = {
  name: Word('заговорить', 7),
  singular1stPerson: Word('заговорю', 7),
  singular2ndPerson: Word('заговоришь', 7),
  singular3rdPerson: Word('заговорит', 7),
  plural1stPerson: Word('заговорим', 7),
  plural2ndPerson: Word('заговорите', 7),
  plural3rdPerson: Word('заговорят', 7),
  masculinePast: Word('заговорил', 7),
  femininePast: Word('заговорила', 7),
  neuterPast: Word('заговорило', 7),
  pluralPast: Word('заговорили', 7),
  imperativeInformal: Word('заговори', 7),
  imperativeFormal: Word('заговорите', 7),
  imperfect: ['заговаривать'],
};

perfectVerbs.set(заговорить.name.text, заговорить);

export { заговорить };