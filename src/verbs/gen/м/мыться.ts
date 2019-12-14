import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мыться: PerfectVerb = {
  name: Word('мыться', 1),
  singular1stPerson: Word('моюсь', 1),
  singular2ndPerson: Word('моешься', 1),
  singular3rdPerson: Word('моется', 1),
  plural1stPerson: Word('моемся', 1),
  plural2ndPerson: Word('моетесь', 1),
  plural3rdPerson: Word('моются', 1),
  masculinePast: Word('мылся', 1),
  femininePast: Word('мылась', 1),
  neuterPast: Word('мылось', 1),
  pluralPast: Word('мылись', 1),
  imperativeInformal: Word('мойся', 1),
  imperativeFormal: Word('мойтесь', 1),
  imperfect: ['помыться','умыться','вымыться'],
};

perfectVerbs.set(мыться.name.text, мыться);

export { мыться };